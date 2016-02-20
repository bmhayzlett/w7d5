var ApiActions = require('../actions/api_actions.js')

ApiUtil = {

  fetchBenches: function() {
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      success: function(benches){
        ApiActions.receiveAll(benches);
      }
    });

  }

}

module.exports = ApiUtil;
