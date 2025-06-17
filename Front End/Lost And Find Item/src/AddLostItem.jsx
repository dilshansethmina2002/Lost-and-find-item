import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LocationPicker from './LocationPicker'; // Import your location picker component
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddLostItem.css'; // Import your CSS for styling the popup


function AddLostItem() {
    const [opnedPopup, setOpened] = useState(false); // State to control the popup visibility
    const [location, setLocation] = useState(null); // State to store the selected location

    return(
        <>
            <Button className='lost-button' onClick={()=>setOpened(true)} >LOST</Button>

            {opnedPopup && ( // If setOpened is true, show the popup
            <div className="popup-overlay">
                <div className="popup">
                    <div className="popup-content">
                        <h2>Add Lost Item</h2>
                        <form>
                            <label>
                                Item Name:
                                <input type="text" name="itemName" />
                            </label>
                            <br />
                            <label>
                                Description:
                                <textarea name="description"></textarea>
                            </label>
                            <br />
                            {/* Google map picker */}
                            <label>
                                Location:
                                <input type="text" name="itemName" />
                                <LocationPicker onLocationSelect={setLocation} />
                            </label>
                            {location && (
                                <div>
                                Selected: {location.lat}, {location.lng}
                                </div>
                            )}
                            <br />

                            {/* Add images */}
                             <label>
                                Picture:
                                <input type="file" name="picture" accept="image/*" />
                            </label>

                            <button type="submit" className='submit-button'>Submit</button>
                            <button type="button" onClick={()=>setOpened(false)} className='cancle-button' >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            )}
        
        </>
    )
}
export default AddLostItem;
// AddLostItem.jsx