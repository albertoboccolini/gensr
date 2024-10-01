function deleteNonStarredEmails() {
  let userEmail = Session.getActiveUser().getEmail();

  const threads = GmailApp.search("");

  let deletedThreadsCount = 0;

  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();

    let containsStarred = false;

    for (let j = 0; j < messages.length; j++) {
      if (messages[j].isStarred()) {
        containsStarred = true;
        break;
      }
    }

    if (!containsStarred) {
      threads[i].moveToTrash();
      Logger.log("Thread deleted: " + threads[i].getFirstMessageSubject());
      deletedThreadsCount++;
    }
  }

  // Send an email upon completion
  let object = "Notifica di pulizia delle tue Email tramite GENSR";

  let bodyHtml =
    '<p style="font-family: Arial, sans-serif; color: #333;">' +
    "Ciao,<br><br>" +
    "La pulizia delle tue email è stata completata con successo!<br>" +
    "Sono state eliminate <strong>" +
    deletedThreadsCount +
    "</strong> email.<br><br>" +
    "<strong>N.B.</strong> Ti ricordo di aggiungere ai preferiti le email che desideri mantenere " +
    "per evitare che vengano eliminate accidentalmente.<br><br>" +
    "Grazie e buona giornata!<br>" +
    "<strong>GENSR</strong> by <strong>albertoboccolini</strong>." +
    "<br><br>" +
    "</p>";

  let bodyText =
    "Ciao,\n\n" +
    "La pulizia delle tue email è stata completata con successo!\n" +
    "Sono state eliminate " +
    deletedThreadsCount +
    " email.\n\n" +
    "N.B. Ti ricordo di aggiungere ai preferiti le email che desideri mantenere " +
    "per evitare che vengano eliminate accidentalmente.\n\n" +
    "Grazie e buona giornata!\n" +
    "GENSR by albertoboccolini.";

  MailApp.sendEmail(userEmail, object, bodyText, {
    htmlBody: bodyHtml,
  });
}
