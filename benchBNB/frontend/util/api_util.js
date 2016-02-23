var ApiActions = require('../actions/api_actions.js')

ApiUtil = {

  fetchBenches: function(bounds) {
    debugger;
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      data: {
        bounds: bounds
      },
      success: function(benches){
        ApiActions.receiveAll(benches);
      }
    });

  }

}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
