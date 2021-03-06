import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import xss from 'xss';
import { PageInfoContext } from '../../contexts/pageInfoProvider';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<number>>;
};

const XssController: React.FC<Props> = ({ threats, setThreats }) => {
  const pageInfo = useContext(PageInfoContext);

  const [xssInfo, setXssInfo] = useState(false);

  useEffect(() => {
    function xssControl() {
      if (pageInfo?.page) {
        if (isXss(pageInfo.page)) {
          setThreats((prev) => prev + 1);
          setXssInfo(true);
        }
      }
    }

    xssControl();
  }, [pageInfo?.page]);

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
        XSS {xssInfo ? 'script Found' : 'secure'}
        <AiOutlineRobot
          style={xssInfo ? { color: '#FF5572' } : { color: '#6BE020' }}
        />
      </h3>
    </div>
  );
};

export default XssController;
