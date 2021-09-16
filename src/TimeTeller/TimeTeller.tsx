const TimeTeller = (props: { date: Date }) => {

	return (
		<h2>It is {props.date.toLocaleTimeString()}.</h2>
	);
};

export default TimeTeller;