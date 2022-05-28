import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import xss from 'xss';
import { PageInfoContext } from '../../contexts/pageInfoProvider';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<number>>;
};

const TrackerController: React.FC<Props> = ({ threats, setThreats }) => {
  const pageInfo = useContext(PageInfoContext);

  const [trackerInfo, setTrackerInfo] = useState(false);

  useEffect(() => {
    function trackerControl() {
      if (pageInfo?.page) {
        trackerCheck(pageInfo.page);
      }
    }

    trackerControl();
  }, [pageInfo?.page]);

  function checkCDNUrl(url: string) {
    if (url.indexOf('<script src="https://') === 0) {
      return true;
    }
    return false;
  }

  function trackerCheck(pagebody: string) {
    if (isXss(pagebody)) {
      if (!checkCDNUrl(pagebody)) {
        setThreats((prev) => prev + 1);
        setTrackerInfo(true);
      } else {
        setTrackerInfo(false);
      }
    }
  }

  //src="https://
  function isXss(html: string) {
    const sanitized = xss(html);

    if (sanitized.includes('&lt;')) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h3 className="ListItemsHeader">
        Unsecure tracker {trackerInfo ? 'Found' : 'Not found'}
        <AiOutlineEyeInvisible
          style={trackerInfo ? { color: '#FF5572' } : { color: '#6BE020' }}
        />
      </h3>
    </div>
  );
};

export default TrackerController;
