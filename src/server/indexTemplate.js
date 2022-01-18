export const indexTemplate = (children, scripts) => ` 
<!DOCTYPE html>
<html lang="en">
        <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
                <meta name="theme-color" content="#000000"/>
                <title>React-Auth</title>
        </head>
        <body>
                <div id="root">${children}</div>
                <div id="modal"></div>
                ${scripts}
        </body>
</html>
`;