import React from 'react';
import {
  AiOutlineHdd,
  AiOutlineExperiment,
  AiOutlineAlert,
  AiOutlineEyeInvisible,
  AiOutlineApi,
} from 'react-icons/ai';
function ListItems() {
  return (
    <div>
      <h6 className="ListItemsDesc">
        <AiOutlineExperiment />
        This url (<code>https://example.com/safe</code>) is <b>Safe</b>
      </h6>
      <div>
        <h3 className="ListItemsHeader">
          DNS <AiOutlineHdd />
        </h3>
      </div>
      <div>
        <h3 className="ListItemsHeader">
          SSL
          <AiOutlineApi />
        </h3>
      </div>
      <div>
        <h3 className="ListItemsHeader">
          Not Listed
          <AiOutlineAlert />
        </h3>
      </div>
      <div>
        <h3 className="ListItemsHeader">
          No trackers <AiOutlineEyeInvisible />
        </h3>
      </div>
    </div>
  );
}

export default ListItems;
