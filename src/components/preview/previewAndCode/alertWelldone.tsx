export const AlertAdditionalContentExample = () => {
	return (
		<div
			className="rounded-md border border-emerald-200 bg-emerald-100 px-4 py-3 text-sm text-emerald-800"
			role="alert"
		>
			<h4 className="mb-2 text-base font-semibold">Well done!</h4>
			<p className="mb-3">
				Aww yeah, you successfully read this important alert message. This example text is going to
				run a bit longer so that you can see how spacing within an alert works with this kind of
				content.
			</p>
			<hr className="mb-3 border-emerald-200" />
			<p className="mb-0">
				Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
			</p>
		</div>
	);
};

export default AlertAdditionalContentExample;
