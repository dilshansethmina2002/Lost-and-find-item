import FoundItems from "../modules/fondItems.js";

export async function createFoundItems(req,res){
    const foundItemsInfo = req.body;

    try {
        const foundItem = new FoundItems({
            name: foundItemsInfo.name,
            description: foundItemsInfo.description,
            location: foundItemsInfo.location,
            image: foundItemsInfo.image,
            phoneNumber: foundItemsInfo.phoneNumber,
            date: foundItemsInfo.date || Date.now()
        });

        const found = await foundItem.save();
        res.status(201).json({
            message: "Found item created successfully",
            data: found
        });
    } catch (err) {
        console.error("Error creating found item:", err);
        res.status(500).json({
            message: "Error creating found item",
            error: err.message
        });
    }
}

export async function getFoundItems(req,res){
    try {
        const foundItems = await FoundItems.find();
        res.status(200).json({
            message: "Found items retrieved successfully",
            data: foundItems
        });
    } catch (err) {
        console.error("Error retrieving found items:", err);
        res.status(500).json({
            message: "Error retrieving found items",
            error: err.message
        });
    }

}

export async function updateFoundItems(req,res){
    const foundItemId = req.params.id;
    const updatedInfo = req.body;

    try {
        await FoundItems.updateOne(
            {_id: foundItemId},
            updatedInfo
        );

        res.json({
            message: "Found item updated successfully"
        });
    } catch (err) {
        console.error("Error updating found item:", err);
        res.status(500).json({
            message: "Error updating found item",
            error: err.message
        });
    }
}

export async function deleteFoundItems(req,res){
    const foundItemId = req.params.id;

    try {
        await FoundItems.deleteOne({_id: foundItemId});
        res.json({
            message: "Found item deleted successfully"
        });
    } catch (err) {
        console.error("Error deleting found item:", err);
        res.status(500).json({
            message: "Error deleting found item",
            error: err.message
        });
    }
} 