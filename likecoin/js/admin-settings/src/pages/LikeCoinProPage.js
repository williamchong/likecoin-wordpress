import { __ } from '@wordpress/i18n';
import { createInterpolateElement, createElement } from '@wordpress/element';
import Link from '../components/Link';
import Section from '../components/Section';

const { likecoHost } = window.likecoinReactAppData;

function LikeCoinProPage() {
  const localizedSubscribe = createInterpolateElement(
    __(
      'Click to <Subscribe/> Web3Press Pro now',
      'likecoin',
    ),
    {
      Subscribe: createElement(Link, {
        text: __('Subscribe', 'likecoin'),
        linkAddress: `https://app.${likecoHost}/nft/subscription`,
      }),
    },
  );
  return (
    <div className="lcp-nav-tab-panel likecoin">
      <Section title={__('Getting Started', 'likecoin')} />
      <div className="lcp-card">
        <h2>{__('Mint as long as you write. Join Web3Press Pro!', 'likecoin')}</h2>
        <p>{localizedSubscribe}</p>
      </div>
    </div>
  );
}

export default LikeCoinProPage;
