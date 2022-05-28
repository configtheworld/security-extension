import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { PageInfoContext } from '../../contexts/pageInfoProvider';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<number>>;
};

const SslController: React.FC<Props> = ({ threats, setThreats }) => {
  const pageInfo = useContext(PageInfoContext);

  const [sslInfo, setSslInfo] = useState(false);

  useEffect(() => {
    function sslControl() {
      if (pageInfo?.url) {
        sslCheck(pageInfo.url);
      }
    }

    sslControl();
  }, [pageInfo?.url]);

  function getValidUrl(url: string) {
    if (url.indexOf('https://') == 0) {
      return true;
    }
    return false;
  }

  function sslCheck(host: string) {
    if (!getValidUrl(host)) {
      setThreats((prev) => prev + 1);
      setSslInfo(false);
    } else {
      setSslInfo(true);
    }
  }

  return (
    <div>
      <h3 className="ListItemsHeader">
        SSL {sslInfo ? 'Certificate Found' : 'Certificate Not Found'}
        <AiOutlineApi
          style={sslInfo ? { color: '#6BE020' } : { color: '#FF5572' }}
        />
      </h3>
    </div>
  );
};

export default SslController;
