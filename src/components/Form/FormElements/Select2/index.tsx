import { useState } from "react";
import styles from "./index.module.css";
import { DownOutlined } from "@ant-design/icons";

// const data = [
//   {id: 1, title:"www", number:"344"}
// ]

const Select = () => {
  // const { options, title, placeHolder, handleChange } = props;
  const [openDrop, setOpenDrop] = useState(false);
  const [selected, setSelected] = useState<string>();

  const handleClick = (param: string) => {
    setSelected(param);
  };

  return (
    <>
      <div>
        {/* <p className="text-[14px] font-bold mb-1">nice</p> */}
        <div
          className={styles.dropDown}
          onClick={() => setOpenDrop(!openDrop)}
          onBlur={() => setOpenDrop(false)}
          tabIndex={0}
        >
          <div className={styles.titleWrap}>
            {/* IF AN OPTION HAS BEEN SELECTED, SHOW SELECTED OPTION; ELSE, SHOW PLACEHOLDER  */}
            {selected ? (
              <span className={styles.selectedText}>{selected}</span>
            ) : (
              <span className={styles.titlePlaceholder}>Select</span>
            )}
            <DownOutlined />
          </div>

          {/* MAP THROUGH OPTIONS */}
          {openDrop && (
            <div className={styles.itemsWrap}>
              {/* {options?.map((item) => ( */}
              <div
                className={styles.items}
                onClick={() => handleClick("Applied")}
              >
                <p>Applied</p>

                <div className={styles.leftText}>
                  <p>234</p>
                </div>
              </div>
              <div
                className={styles.items}
                onClick={() => handleClick("Shortlisted")}
              >
                <p>Shortlisted</p>

                <div className={styles.leftText}>
                  <p>234</p>
                </div>
              </div>
              {/* ))} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Select;
