import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineAlert } from 'react-icons/ai';
import { PageInfoContext } from '../../contexts/pageInfoProvider';
import blacklist from '../../blacklistedwebsites/blacklisted.json';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<any>>;
};

export const BlackListedController: React.FC<Props> = ({
  threats,
  setThreats,
}) => {
  const pageInfo = useContext(PageInfoContext);

  const [listInfo, setListInfo] = useState(false);

  useEffect(() => {
    function xssControl() {
      if (pageInfo?.url) {
        if (isListed(pageInfo.url)) {
          setThreats(threats + 1);
          setListInfo(true);
        }
      }
    }

    xssControl();
  }, [pageInfo?.url]);

  function isListed(url: string) {
    blacklist.forEach((website) => {
      if (website.domain === url) {
        return true;
      }
    });

    return false;
  }

  return (
    <div>
      <h3 className="ListItemsHeader">
        {listInfo ? 'black listed' : 'not listed'}
        <AiOutlineAlert
          style={listInfo ? { color: '#FF5572' } : { color: '#6BE020' }}
        />
      </h3>
    </div>
  );
};
