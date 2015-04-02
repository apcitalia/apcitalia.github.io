<html>
    <head>

        <title>Benvenuto</title>
    </head>
    <body>
        <div id="fb-root"></div>
        <script>(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

        <div align=”center”>Hello World!</div>
        <script> /* make the API call */

            FB.api('/' + page_id, {fields: 'access_token'}, function(resp2) {
            if (resp2.access_token) {
            FB.api('/' + page_id + '/feed', 'post', {

            message: headline + ' \n' + texten,
                    access_token: resp2.access_token,
                    picture: imgURL,
                    embed_html:"<object width=\"480\" height=\"360\" ><param name=\"allowfullscreen\" value=\"true\" /><param name=\"movie\" value=\"http://www.facebook.com/v/<%=facebookPageId%>\" /><embed src=\"http://www.facebook.com/v/<%=facebookPageId%>\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\"480\" height=\"360\"></embed></object>",
                    width: 480,
                    height: 360,
                    source : videoURL,
                    name   : headline, //rubriken brevid thumbnail bilden
                    link   : videoURL//länken dit rubriken pekar, måste ha ett värde annars går länken till bilden på appmanagern!!!
                    //description : '<'%=facebookDescription%>'
            }





            FB.api(
                    "/777260315685497_777357322342463",
                    function (response) {
                    if (response && !response.error) {
                    /* handle the result */
                    }
                    }
            );</script>
        <div align=”center”>Hello World!</div>





        <div class="fb-comments" data-href="http://developers.facebook.com/docs/plugins/comments/" 
             data-numposts="5" data-colorscheme="light"></div>
    </body>
</html>

