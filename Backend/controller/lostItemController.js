import LostItems from "../modules/lostItems.js";


export async function createLostItems(req,res){
 const lostItemsInfo = req.body;

 try{
    const lostItem = new LostItems({
        name: lostItemsInfo.name,
        description: lostItemsInfo.description,
        location: lostItemsInfo.location,
        image: lostItemsInfo.image,
        phoneNumber: lostItemsInfo.phoneNumner,
        date: lostItemsInfo.date || Date.now()
    });

    const lost = await lostItem.save();
    res.status(201).json({
        message: "Lost item created successfully",
        data: lost
    });
 }catch(err){
    console.error("Error creating lost item:", err);
    res.status(500).json({
        message: "Error creating lost item",
        error: err.message
    });
  }
}

export async function getLostItems(req,res){
    try {
        const lostItems = await LostItems.find();
        res.status(200).json({
            message: "Lost items retrieved successfully",
            data: lostItems
        });
    } catch (err) {
        console.error("Error retrieving lost items:", err);
        res.status(500).json({
            message: "Error retrieving lost items",
            error: err.message
        });
    }

}

export async function updateLostItems(req,res){
    const lostItemId = req.params.id;
    const updatedInfo = req.body;
    try{
        await LostItems.updateOne(
        {_id: lostItemId},
        updatedInfo
        )

        res.json({
        message : "Product updated Successfully"
        })

    }catch(err){
        req.status(500).json({
        message: "Internal Server Error!!",
        error: err
        })
    }

}

export function deleteLostItems(req,res){
    const lostItemId = req.params.id;
    LostItems.deleteOne({_id: lostItemId})
        .then(() => {
            res.json({
                message: "Lost item deleted successfully"
            });
        })
        .catch((err) => {
            console.error("Error deleting lost item:", err);
            res.status(500).json({
                message: "Error deleting lost item",
                error: err.message
            });
        });

} 