import { readFromFile, writeIntoFile } from "../utility/filehandling.js"

export const getEntry = (_, res) => {
    // read file
    readFromFile('blogposts.json')
        // when everything ok put into json by parsing the data
        .then(data => res.status(200).json(JSON.parse(data)))
        // when error server response with status 500 (+ error in console) and end the action
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}

// function to add a new blog post
export const addBlogpost = (req, res) => {
    // blog post object
    const blogpost = {
        blogtitle: req.body.blogtitle,
        blogimage: req.file.path,
        blogcontent: req.body.blogcontent
    }

    // read file
    readFromFile('blogposts.json')
        // .parse() method parses a JSON string, constructing the JavaScript value or object described by the string
        .then(data => JSON.parse(data))
        .then(obj => {
            // push new data to file
            obj.push(blogpost)
            // write into file
            // .stringify() method converts the JavaScript value to a JSON string – makes it ready to send
            writeIntoFile('blogposts.json', JSON.stringify(obj))
                .then(() => res.status(200).end())
                .catch(err => {
                    console.log(err)
                    res.status(500).end()
                })
        })
}