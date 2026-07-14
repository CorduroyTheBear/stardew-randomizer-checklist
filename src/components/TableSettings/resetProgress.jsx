import {useState} from "react";

export default function ResetProgress({onResetProgress})
{
    const [confirming, setConforming] = useState(false);

    const handleClick = () =>
    {
        if (confirming)
        {
            onResetProgress();
            setConforming(false);
        }

        else
        {
            setConforming(true);
        }
    };

    const handleCancel = () => setConforming(false);

    return(
        <>
            {confirming
                ?(
                    <>
                        <span>Are you sure you want to reset your progress?</span>
                        <button onClick = {handleClick}>Yes</button>
                        <button onClick= {handleCancel}>No</button>
                    </>
                )

                :(
                    <button onClick = {handleClick}>Reset Progress</button>
                )          
            }
        </>
    );
}