// import Postgrest from 'mithril-postgrest';
const testToken = 'test_token';
const nContributions = 20;
const apiMeta = document.createElement('meta');
const apiPrefix = 'https://api.catarse.me';
apiMeta.content = apiPrefix;
apiMeta.name = 'api-host';
document.getElementsByTagName('head')[0].appendChild(apiMeta);

const commonPaymentApiMeta = document.createElement('meta');
commonPaymentApiMeta.content = 'https://payment.common.io';
commonPaymentApiMeta.name = 'common-payment-api-host';
document.getElementsByTagName('head')[0].appendChild(commonPaymentApiMeta);

const commonAnalyticsApiMeta = document.createElement('meta');
commonAnalyticsApiMeta.content = 'https://analytics.common.io';
commonAnalyticsApiMeta.name = 'common-analytics-api-host';
document.getElementsByTagName('head')[0].appendChild(commonAnalyticsApiMeta);
// const apiPrefix = "https://api.catarse.me";
// catarse.init(apiPrefix, {method: "GET", url: "/api_token"});

const mockEndpoint = function (endpoint, result) {
    return jasmine.Ajax.stubRequest(
    new RegExp(`(${apiPrefix}\/${endpoint})(.*)`)
  ).andReturn({
      responseText: JSON.stringify(result)
  });
};

beforeAll(() => {
    jasmine.Ajax.install();

  // API token stub
    jasmine.Ajax.stubRequest('/api_token').andReturn({
        responseText: `{"token": "${testToken}"}`
    });

    jasmine.Ajax.stubRequest('/test').andReturn({
        responseText: '{"object": "responseOK"}'
    });
});

afterAll(() => {
    jasmine.Ajax.uninstall();
});
