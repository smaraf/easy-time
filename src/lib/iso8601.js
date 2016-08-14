var iso8601 = module.exports;

iso8601.parse = function(date) {
    return date.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2}).(\d{3})([+-])(\d{2})(\d{2})/);
};
