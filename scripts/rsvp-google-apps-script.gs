/**
 * Google Apps Script — append RSVP rows to the spreadsheet this script is bound to.
 *
 * Setup:
 * 1. Create a Google Sheet (or use an existing one).
 * 2. Extensions → Apps Script → paste this file → Save.
 * 3. Deploy → New deployment → Select type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec).
 * 5. In your Next.js project, set in .env.local:
 *    RSVP_GOOGLE_APPS_SCRIPT_URL=<paste the URL here>
 * 6. Redeploy the script after any code change (Manage deployments → Edit → Version → Deploy).
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.website && String(data.website).trim() !== "") {
      return jsonOut({ ok: true });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian",
        "Tên",
        "Điện thoại",
        "Tham dự",
        "Số khách",
        "Lời chúc",
      ]);
    }

    var attendance =
      data.attendance === "yes"
        ? "Có"
        : data.attendance === "no"
          ? "Không"
          : String(data.attendance || "");

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      attendance,
      data.guests || "",
      data.notes || "",
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
