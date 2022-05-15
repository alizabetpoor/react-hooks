import { memo } from "react";
const Child = ({ number, incrFunc }) => {
    console.log("- rerender child component");
    return (
        <div className="child">
            <p>child component</p>
            <p>{number}</p>
            <button onClick={() => incrFunc()}>increase num from child</button>
        </div>
    );
};

export default memo(Child);
// export default Child;
