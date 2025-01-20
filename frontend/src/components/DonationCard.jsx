const DonationCard = ({ tipo, descripcion }) => (
    <div className="donation-card">
        <h3>{tipo}</h3>
        <p>{descripcion}</p>
        <button>Ver Más</button>
    </div>
);

export default DonationCard;
