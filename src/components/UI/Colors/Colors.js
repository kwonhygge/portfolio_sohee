import React from 'react';
import styles from './Colors.module.css';
const Colors = (props) => {
  console.log('내가 받은거', props.colorlist);
  return (
    <>
      <div className={styles.Colors}>
        {props.colorlist.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                background: item,
                width: '2.08vw',
                height: '2.08vw',
                borderRadius: '50%',
                boxShadow:
                  '-4px -4px 10px 0.21px #FFFFFF, inset 4px 4px 10px 0.21px rgba(255, 255, 255, 0.2),0px 4px 4px rgba(0, 0, 0, 0.25)',
                marginRight: '0.83vw',
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Colors;
