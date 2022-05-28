import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineHdd } from 'react-icons/ai';
import { PageInfoContext } from '../../contexts/pageInfoProvider';
import dns from 'dns';

type Props = {
  threats: number;
  setThreats: React.Dispatch<React.SetStateAction<number>>;
};

const DnsController: React.FC<Props> = ({ threats, setThreats }) => {
  const pageInfo = useContext(PageInfoContext);

  const [dnsInfo, setDnsInfo] = useState({ ip: '', host: '', valid: false });

  useEffect(() => {
    function dnsControl() {
      if (pageInfo?.url) {
        dnsLookup(pageInfo.url);
      }
    }
    dnsControl();
  }, [pageInfo?.url]);

  function dnsLookup(host: string) {
    dns.lookup(host, 4, function (err, ip) {
      if (err) {
        //console.log(`Error resolving IP for Host ${host}`);
        setDnsInfo({ host: host, ip: ip, valid: false });
        setThreats((prev) => prev + 1);
      } else {
        //console.log(`Resolved Host ${host} to IP ${ip}`);
        setDnsInfo({ host: host, ip: ip, valid: true });
      }
    });
  }

  return (
    <div>
      <h3 className="ListItemsHeader">
        DNS {dnsInfo.ip ? dnsInfo.ip : 'not found'}
        <AiOutlineHdd
          style={dnsInfo.valid ? { color: '#6BE020' } : { color: '#FF5572' }}
        />
      </h3>
    </div>
  );
};

export default DnsController;
