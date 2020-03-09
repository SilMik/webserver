## Recordar.

- Los archivos -old no se están usando, pues se usan los con extensión hbs.
- El package.json se le agregaron instrucciones para subirlo a heroku.
```
"scripts": {
        "start": "node server.js"
```

para ejecutarlo seria ```npm start```

Si agregáramos:

	“nodemon”: “nodemon server.js”

Para ejecutarlo:

```
npm run nodemon
```

- La principal idea de este proyecto era generar un webserver que sirviera una pagina web para probar handlebars

```npm install hbs```

para probar los parciales y helpers que proporciona.