import {
  AiOutlineExperiment,
  AiOutlineAlert,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useContext, useState } from 'react';
import { PageInfoContext } from '../contexts/pageInfoProvider';
import DnsController from './Controls/DnsController';
import SslController from './Controls/SslController';
import XssController from './Controls/XssController';

function ListItems() {
  const pageInfo = useContext(PageInfoContext);

  const [threats, setThreats] = useState(0);

  return (
    <div>
      <h6 className="ListItemsDesc">
        <AiOutlineExperiment />
        {pageInfo?.title}
        <br />(
        <small>
          <code>{pageInfo?.url}</code>
        </small>
        ) <br />
        {threats === 0 ? (
          <span style={{ color: '#6BE020' }}>is SAFE</span>
        ) : (
          <span style={{ color: '#FF5572' }}>is NOT SAFE</span>
        )}
      </h6>
      <h2 style={{ color: '#fff' }}>{threats} Potential Threats Found</h2>
      <DnsController threats={threats} setThreats={setThreats} />
      <SslController threats={threats} setThreats={setThreats} />
      <div>
        <h3 className="ListItemsHeader">
          Listed
          <AiOutlineAlert style={{ color: 'red' }} />
        </h3>
      </div>
      <div>
        <h3 className="ListItemsHeader">
          have trackers <AiOutlineEyeInvisible style={{ color: 'red' }} />
        </h3>
      </div>
      <XssController threats={threats} setThreats={setThreats} />
    </div>
  );
}

export default ListItems;
