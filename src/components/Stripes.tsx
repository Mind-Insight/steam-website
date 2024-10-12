function Stripes() {
    const stripesCount = 12;

    return (
        <div className="stripes-background" style={{ width: '1160px', overflow: 'hidden' }}>
            {Array.from({ length: stripesCount }, (_, index) => (
                <div
                    key={index}
                    className="stripe"
                />
            ))}
        </div>
    );
}

export default Stripes;