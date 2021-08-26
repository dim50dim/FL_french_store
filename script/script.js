app.post('/users', (async (req, res) => {
    const{email, password} = req.body;

    const content = await readFilePromise(path.join(__dirname,'dataBase','users.json'));

      let parseN  = JSON.parse(content);

    parseN.push({email,password});

    await writeFilePromise(path.join(__dirname,'dataBase','users.json'),JSON.stringify(parseN));



    res.send('nice');
}))