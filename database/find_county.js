var mongoose = require('mongoose');
module.exports = mongoose.model('2010_cancer_by_county', {
	_id: ObjectId,
	county: String,
	cases: int,
	case_rate: double,
	deaths: int,
	death_rate: double

}
