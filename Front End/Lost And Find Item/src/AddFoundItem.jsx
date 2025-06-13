import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LocationPicker from './LocationPicker'; // Import your location picker component
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddFoundItem.css'; // Import your CSS for styling the popup


function AddFoundItem() {
    const [opnedPopup, setOpened] = useState(false); // State to control the popup visibility
    const [location, setLocation] = useState(null); // State to store the selected location

    return(
        <>
            <Button className='found-button' onClick={()=>setOpened(true)} >Found</Button>

            {opnedPopup && ( // If setOpened is true, show the popup
            <div className="popup-overlay">
                <div className="popup">
                    <div className="popup-content">
                        <h2>Add Found Item</h2>
                        <form>
                            <label>
                                Item Name
                                <input type="text" name="itemName" />
                            </label>
                            <br />
                            <label>
                                Description:
                                <textarea name="description"></textarea>
                            </label>
                            <br />
                            <form>
                                
                                {/* Google map picker */}
                                <label>
                                    Location:
                                    <LocationPicker onLocationSelect={setLocation} />
                                </label>
                                {location && (
                                    <div>
                                    Selected: {location.lat}, {location.lng}
                                    </div>
                                )}
                            </form>
                            <br />

                            <label>
                                Picture:
                                <input type="file" name="picture" accept="image/*" />
                            </label>


                            <button type="submit">Submit</button>
                            <button type="button" onClick={()=>setOpened(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            )}
        
        </>
    )
}
export default AddFoundItem;