<!DOCTYPE html>
<html>
<head>

    <title>News authorization</title>
    <link rel="stylesheet" href="/magistr/resources/styles.css"/>

</head>

<body>
<!-- // login-form // -->

<div class="login-form">
    <form action="register" method="POST" name="reg_form" id="reg_form">
        <fieldset style="background: white;">

            <label for="login">Login <input type="text" name="username" value="" id="login"></label>
            <label for="password">Password <input type="password" name="password" value="" id="password"></label>
            <input type="submit" value="Register" title="Register">
            <a href="login">Login</a>
            <br/>
            <span class="error" id="error-message">${error}</span>
        </fieldset>
    </form>
</div>

</body>
</html>
