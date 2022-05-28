import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import xss from 'xss';
import { PageInfoContext } from '../../contexts/pageInfoProvider';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<any>>;
};

const XssController: React.FC<Props> = ({ threats, setThreats }) => {
  const pageInfo = useContext(PageInfoContext);

  const [xssInfo, setXssInfo] = useState(false);

  useEffect(() => {
    function xssControl() {
      if (pageInfo?.url) {
        // if (isXss(pageInfo.page)) {
        //   setThreats(threats + 1);
        //   setXssInfo(true);
        // }
        console.log(pageInfo.title);
      }
    }

    xssControl();
  }, [pageInfo?.url]);

  function isXss(html: string) {
    const sanitized = xss(html);
    console.log(sanitized);

    if (sanitized.includes('&lt;')) {
      console.log('xss var');
      return true;
    } else {
      console.log('xss yok');
      return false;
    }
  }

  return (
    <div>
      <h3 className="ListItemsHeader">
        XSS {xssInfo ? 'script Found' : 'secure'}
        <AiOutlineEyeInvisible
          style={xssInfo ? { color: '#FF5572' } : { color: '#6BE020' }}
        />
      </h3>
    </div>
  );
};

export default XssController;
