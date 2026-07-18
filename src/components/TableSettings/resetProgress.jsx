import {useState} from "react";

export default function ResetProgress({onResetProgress})
{
    const [confirming, setConfirming] = useState(false);

    const handleConfirm = () =>
    {
        onResetProgress();
        setConfirming(false);
    };

    const handleCancel = () => setConfirming(false);

    return(
        <>
            <button className="resetButton" onClick={() => setConfirming(true)}>
                Reset Progress
            </button>

            {confirming && (
                <div className="reset-confirm-overlay" onClick={handleCancel}>
                    <div className="reset-confirm-box" onClick={(e) => e.stopPropagation()}>
                        <p>Are you sure you want to reset your progress?</p>
                        <div className="reset-confirm-buttons">
                            <button className="reset-confirm-yes" onClick={handleConfirm}>Yes</button>
                            <button className="reset-confirm-no" onClick={handleCancel}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}