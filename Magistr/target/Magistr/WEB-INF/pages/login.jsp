<!DOCTYPE html>
<html>
<head>

    <title>&#1055;&#1072;&#1085;&#1077;&#1083;&#1100; &#1072;&#1076;&#1084;&#1080;&#1085;&#1080;&#1089;&#1090;&#1088;&#1072;&#1090;&#1086;&#1088;&#1072;</title>
    <link rel="stylesheet" href="/magistr/resources/styles.css"/>
</head>

<body>
<div class="login-form">
    <form action="j_spring_security_check" method="POST" name="login_form" id="login_form">
        <fieldset style="background: white;">
            <label for="user_login">&#1051;&#1086;&#1075;&#1080;&#1085; <input type="text" name="j_username" value="" id="user_login"></label>
            <label for="user_password">&#1055;&#1072;&#1088;&#1086;&#1083;&#1100; <input type="password" name="j_password" value=""
                                                       id="user_password"></label>
            <input type="submit" value="&#1042;&#1086;&#1081;&#1090;&#1080;" title="&#1042;&#1086;&#1081;&#1090;&#1080;">
            <br/>
            <span class="error" id="error-message">${error}</span>
        </fieldset>
    </form>
</div>
</body>
</html>
