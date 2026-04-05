import { NextRequest, NextResponse } from "next/server";

const MAX_NOTES = 2000;
const MAX_NAME = 120;
const MAX_PHONE = 32;

type Attendance = "yes" | "no";

interface Body {
  name: string;
  phone: string;
  attendance: Attendance;
  guests: string;
  notes: string;
  website?: string;
}

function sanitize(s: string, max: number): string {
  return s.trim().slice(0, max);
}

function validate(body: Partial<Body>): { ok: true; data: Body } | { ok: false; message: string } {
  if (body.website != null && String(body.website).trim() !== "") {
    return { ok: false, message: "invalid" };
  }

  const name = sanitize(String(body.name ?? ""), MAX_NAME);
  const phone = sanitize(String(body.phone ?? ""), MAX_PHONE);
  const attendance = body.attendance;
  const guests = String(body.guests ?? "1").trim();
  const notes = sanitize(String(body.notes ?? ""), MAX_NOTES);

  if (!name) return { ok: false, message: "Tên là bắt buộc." };
  if (!phone) return { ok: false, message: "Số điện thoại là bắt buộc." };
  if (attendance !== "yes" && attendance !== "no") {
    return { ok: false, message: "Vui lòng chọn có tham dự hay không." };
  }

  const guestNum = Number.parseInt(guests, 10);
  if (!Number.isFinite(guestNum) || guestNum < 1 || guestNum > 10) {
    return { ok: false, message: "Số khách không hợp lệ." };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      attendance,
      guests: String(guestNum),
      notes,
    },
  };
}

export async function POST(req: NextRequest) {
  const gasUrl = process.env.RSVP_GOOGLE_APPS_SCRIPT_URL?.trim();
  if (!gasUrl) {
    console.error("[rsvp] Missing RSVP_GOOGLE_APPS_SCRIPT_URL");
    return NextResponse.json(
      { error: "RSVP chưa được cấu hình. Thêm RSVP_GOOGLE_APPS_SCRIPT_URL vào .env.local." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const checked = validate(json as Partial<Body>);
  if (!checked.ok) {
    if (checked.message === "invalid") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    return NextResponse.json({ error: checked.message }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checked.data),
      redirect: "follow",
    });
  } catch (e) {
    console.error("[rsvp] Google Apps Script fetch failed:", e);
    return NextResponse.json(
      { error: "Không kết nối được. Thử lại sau nhé." },
      { status: 502 },
    );
  }

  const raw = await upstream.text();
  let parsed: { ok?: boolean } = {};
  try {
    parsed = JSON.parse(raw) as { ok?: boolean };
  } catch {
    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Không gửi được. Kiểm tra Apps Script và Google Sheet." },
        { status: 502 },
      );
    }
  }

  if (!upstream.ok || parsed.ok === false) {
    return NextResponse.json(
      { error: "Không gửi được. Kiểm tra Apps Script và Google Sheet." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export const runtime = "nodejs";
