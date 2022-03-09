
export const getDates = (req, res) => {
    // example output
    res.json({
        data: [
            {
                title: "Ulrike, Sommerurlaub",
                startDate: '2022-06-23',
                endDate: '2022-07-7'
            },
        ]
    });
}

export const addDate = (req, res) => {
    // validate input
    // Here you have to check the data
    const data = req.body;

    // <-- Validation here

    if (isValdidData) {
        res.json({
            message: "Success"
        });
    } else {
        res.status(406).json({
            message: "Invalid Input",
            errors: [], // <- insert errors here
        })
    }
}