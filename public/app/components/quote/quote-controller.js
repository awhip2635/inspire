function QuoteController() {

	var qs = new QuoteService()

	function getQuote() {
		qs.getQuote(drawQuote)
	}

	function drawQuote(quote) {
		var template = ""
		template += `<div class="black row"><div class="col-xs-12 col-sm-12">
		<p id="quote" class="quote-baby">${quote.quote}</p><p id="author" class="quote-author">~${quote.author}</p>
		</div>
		</div>`
		document.getElementById('quote').innerHTML = template;

		$("#quote").hover(function () {
			$("#author").css("display", "block");
		}, function () {
			$("#author").css("display", "none");
		});
	}

	getQuote()
}
