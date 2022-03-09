
export const index = (req, res) => {
    res.json({
        description: "API to test date validation rules",
        endpoints: {
            dates: ['GET', 'POST'],
        },
    });
  };