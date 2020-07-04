const { google } = require('googleapis')
const requireFromUrl = require('require-from-url/sync')
const keyFile = requireFromUrl('https://raw.githubusercontent.com/riptakagi/riptakagi.me/master/analytics-keys.json')

exports.handler = async function (event, context, callback) {

    const client = await google.auth.getClient({
        keyFile: keyFile,
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
    })

    const analyticsreporting = google.analyticsreporting({
        version: 'v4',
        auth: client
    })

    const googleRes = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: '222946306',  // メモしたGoogle Analyticsの ビューIDを入力
                    dateRanges: [ // 過去30日を集計対象とする
                        {
                            startDate: '30daysAgo',
                            endDate: '1daysAgo'
                        }
                    ],
                    dimensions: [ // ページパスをディメンションにする
                        {
                            name: 'ga:pagePath'
                        }
                    ],
                    metrics: [ // 利用する指標
                        {
                            expression: 'ga:pageviews'  // ページビューを指標として利用
                        }
                    ],
                    orderBys: { // ソート順
                        fieldName: 'ga:pageviews', // ページビューでソート
                        sortOrder: 'DESCENDING'  // 降順でソートする設定
                    },
                    pageSize: 5 // レスポンス件数を5件に
                }
            ]
        }
    })

    callback(null, {
        statusCode: 200,
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(googleRes.data)
    })
}