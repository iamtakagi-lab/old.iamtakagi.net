const { google } = require('googleapis')

exports.handler = async function (event, context, callback) {

    const client = await google.auth.getClient({
        credentials: {
            client_email: 'riptakagi-me@long-flame-268318.iam.gserviceaccount.com',
            private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDiNe94TbLEmbOF\n70R6ZHE93euC30baiflIYxmji942xLVMNL+lzoUpC/fvBqO4Tu4shjr3EYST23rz\nz9SBD0V1y1+MLX+nI3ZQirJmF/swIDVvQi98vFQ1eXCXRCVqsRsuVrKhUCCQ6WFi\n+24jeDKrekmAIrCGfUa+fGB27gE6MtJWJ/TiV9oV/qOX78LRNylxJ9bSl1sq9jIY\njw4rYhzOAeiUCdGEvTJY8dmjlK2aiD/q6VJ90R/F4sq8tybRMkEijI+Xl3oPAnrw\nM397LIIIxseHo42vFbdU+jF3m3D0qqfxYYHZqkL6VttrDyKUbjCFZjw6gMz4sy61\nVWQ99f1zAgMBAAECggEAH3MfNYsb4RB7cJII47lGMzNA1IOlTqnjEgjRHjdKcDPd\n/tfQk0VIpyHGWSGDrpKus1sAJKx3UbUwfWg2I7FTV2KsiIkk18Bq6Ry3W9FWt2Sq\n+Spq/r0SOhMFr8omJ5Sy8jjUge/pbyw7QW8ya1UBOmz4fguUnkYZiU8yfCZv3j7C\nlX6vH0g6biA0/yswZyWJ0v4Qi1yzXD42WYt94P3OSCOY70tUSxHsQKQIpzO4gKBE\nZ1O/jbQFgxzG0ygzWDGogXU/GyDWq2mloCXEYOQLPnwafcN2oxUgnmNogzilp9Nk\nj7vyR6qoTRUDlawpEuSRHz2c5fNS6/L5XbZbU0ylvQKBgQD9c/Hg7vBPdO9qd6S+\nopCALTgCc0A+T1NjdCx8aUgaOU0Ri7UxHBflO/32ekndtBLBhcVjDyROUwfcJP7E\n9ghsEII3DgphnunCmdpx/XUI3iXNdrFCEbf3gm+Dpa4RvNv9VIeEQ+4YRaFtSDM1\nLoCsXm/uYj1K489DDEh5lMa23QKBgQDke+ekxkH/slzrkdNA6skxQ9PbzlP83zAo\nSlc030KsAOUUUFHw4SxLkOX4rS4bHlXFqKpr/7huEWxGuACTaDFpp6HlVOoHpKuF\nwW0VrT5uLhbFgGuIseWwGiFnmoRH7UfD01u2CMqYX5FgvjYGg8pPoab/idcsEir7\nP6QEj7O4jwKBgQC/JnnPDgXZtzR11KRATnSy5ueuGWPjWopmoJCIiBKkDIFOcVKH\nJkvzTEqeYN5iwdO/dndG3X2hQMfVxWUMAQ6bCdxbT1CPDX35kXWJsQFaXcie7ByF\n2r0ng408+XCN2iUEK4NFQsJINgOoWuKcAmVzGopKfHcDi0qeo53pbEZuVQKBgQDe\niUvhsfPgLoHQMxTV2pegsxZqtPgah+sootdzOKyASNLVyTE18qqo4vUKEuqgIRib\nTp7GV6fzFGcoLdjpuYa/CDVn3x+d2CXzPaSYg0cWGy+0p1KVLeevcJPui5GhWJsY\nQQjHMKLaa+J1nm2SRNRMYP79TuzTENLqKV7/zlLWQwKBgQCF5wEYPuA00G0FaZWZ\nOxDtur/FrAfvgVcHuxHkMnXxjfTj+l0CRQyHYZGVbv5HqRgpDrMCYs7ngWV35Uea\nnyMTSdvpH5I2XA3nBI8IBJHi0GTUrvCz83o4KOcU54Yla5OOm7shM+V0gHPwQhHe\nAlWf+9kwDOuOnPwBRLt2oOxUnA==\n-----END PRIVATE KEY-----\n'
        },
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