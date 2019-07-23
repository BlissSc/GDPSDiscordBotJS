# GDPSDiscordBotJS
Basic discord bot for GDPS ([Cvolton](https://github.com/Cvolton/GMDprivateServer))

# After installing bot. (IMPORTANT)
- In your ``GMDprivateServer-master`` or ``database``, go to config > [discord.php](https://github.com/Cvolton/GMDprivateServer/blob/master/config/discord.php)

Edit:

```php
<?php
$discordEnabled = 1;
$secret = "CLIENT SECRET";
$bottoken = "BOT TOKEN";
?>
```

- In tools/bot/discordLinkReq.php edit the ``$query = $db->prepare("INSERT INTO messages")``

```sql
$query = $db->prepare("INSERT INTO messages (subject, body, accID, userID, userName, toAccountID, secret, timestamp)
VALUES ('CLIENT SECRET FROM BOT', :body, ACCOUNTID, USERID, 'YOUR_BOT_ACCOUNT (CREATE ONE IF YOU DONT HAVE)', :toAccountID, 'Automatic Message', :uploadDate)");
```

# THANKS!
