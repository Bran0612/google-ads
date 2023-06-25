import "./GoogleAdCard.css";
import numeral from "numeral";

const ad = {
  ad_id: "CR05673361664385220609",
  ad_url:
    "https://adstransparency.google.com/advertiser/AR01861182914755035137/creative/CR05673361664385220609?political\u003d\u0026region\u003dEU",
  ad_type: "IMAGE",
  regions:
    "AT, BE, BG, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, PL, PT, RO, SE, SI, SK",
  advertiser_id: "AR01861182914755035137",
  advertiser_name: "PARTIDUL SOCIAL DEMOCRAT - P.S.D.",
  ad_campaigns_list: null,
  date_range_start: "2019-09-25",
  date_range_end: "2019-10-07",
  num_of_days: "13",
  impressions: "1750000-2000000",
  spend_usd: null,
  first_served_timestamp: "2019-09-25 07:00:00.000000 UTC",
  last_served_timestamp: "2019-10-07 07:00:00.000000 UTC",
  age_targeting: null,
  gender_targeting: null,
  geo_targeting_included:
    "Alba Iulia,Alba County,Romania, Alexandria,Teleorman County,Romania, Arad,Arad County,Romania, Bacau,Bacau County,Romania, Baia Mare,Maramures County,Romania, Botosani,Botosani County,Romania, Braila,Braila County,Romania, Brasov,Brasov County,Romania, Bucharest,Bucharest,Romania, Bucharest,Romania, Buzau,Buzau County,Romania, Calarasi,Calarasi County,Romania, Cluj-Napoca,Cluj County,Romania, Constanta,Constanta County,Romania, Craiova,Dolj County,Romania, Deva,Hunedoara County,Romania, Drobeta-Turnu Severin,Mehedinti County,Romania, Focsani,Vrancea County,Romania, Galati,Galati,Romania, Giurgiu,Giurgiu County,Romania, Henri Coanda International Airport,Ilfov County,Romania, Iasi,Iasi County,Romania, Ilfov County,Romania, Mangalia,Constanta County,Romania, Miercurea Ciuc,Harghita County,Romania, Oradea,Bihor County,Romania, Otopeni,Ilfov County,Romania, Piatra Neamt,Neamt County,Romania, Pitesti,Arges County,Romania, Ploiesti,Prahova,Romania, Ramnicu Valcea,Valcea County,Romania, Satu Mare,Satu Mare County,Romania, Sfantu Gheorghe,Covasna County,Romania, Sibiu,Sibiu,Romania, Sighisoara,Mures County,Romania, Slobozia,Ialomita County,Romania, Suceava,Suceava County,Romania, Targoviste,Dambovita County,Romania, Targu Mures,Mures County,Romania, Timisoara,Timis County,Romania, Tulcea,Tulcea County,Romania, Turda,Cluj County,Romania, Vaslui,Vaslui County,Romania, Zalau,Salaj,Romania",
  geo_targeting_excluded: null,
  spend_range_min_usd: "0",
  spend_range_max_usd: "100",
  spend_range_min_eur: "450",
  spend_range_max_eur: "500",
  spend_range_min_inr: "0",
  spend_range_max_inr: "250",
  spend_range_min_bgn: "0",
  spend_range_max_bgn: "100",
  spend_range_min_hrk: "0",
  spend_range_max_hrk: "0",
  spend_range_min_czk: "0",
  spend_range_max_czk: "1500",
  spend_range_min_dkk: "0",
  spend_range_max_dkk: "500",
  spend_range_min_huf: "0",
  spend_range_max_huf: "20000",
  spend_range_min_pln: "0",
  spend_range_max_pln: "250",
  spend_range_min_ron: "2000",
  spend_range_max_ron: "2250",
  spend_range_min_sek: "0",
  spend_range_max_sek: "1000",
  spend_range_min_gbp: "0",
  spend_range_max_gbp: "50",
  spend_range_min_nzd: "0",
  spend_range_max_nzd: "200",
  spend_range_min_brl: "0",
  spend_range_max_brl: "500",
};
const GoogleAdCard = () => {


  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    return `${month} ${day}`;
  };

  
  function convertImpressionsRange(impressions) {
    const [lower, upper] = impressions.split("-");
    const lowerK = Math.floor(parseInt(lower) / 1000);
    const upperK = Math.floor(parseInt(upper) / 1000);
    return `${lowerK}K-${upperK}K`;
  }

  return (
    <div className="card">
      <div className="iframe-container">
        <iframe src={ad.ad_url} scrolling="no" />
      </div>
      <div className="details-container">
        <div className="advertiser-name">{ad.advertiser_name}</div>
        <div className="impressions">
          <p>shown</p>
          <div className="impressions-numbers">
            {convertImpressionsRange(ad.impressions)}
          </div>
          <p>times</p>
        </div>
        <div className="date-range">
          <p>from</p>
          <div className="date-numbers">
            {formatDate(ad.date_range_start)} - {formatDate(ad.date_range_end)}
          </div>
          <p>({ad.num_of_days}days)</p>
        </div>
        <div className="spend-range">
          <p>spent</p>
          <div className="spend-numbers">
            ${ad.spend_range_min_usd} - ${ad.spend_range_max_usd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdCard;
