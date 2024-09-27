document.getElementById('run').addEventListener('click', function () {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const js = document.getElementById('js').value;
    
    const output = document.getElementById('output');
    const outputDocument = output.contentDocument || output.contentWindow.document;

    outputDocument.open();
    outputDocument.write(`
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `);
    outputDocument.close();
});
