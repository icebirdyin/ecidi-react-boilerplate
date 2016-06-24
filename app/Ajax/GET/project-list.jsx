/*
 * 集合所有同类型数据的 GET 请求
 *
 */

const ajaxType = 'GET';

const initialFunction = () => {};

export function getProjectList(success = initialFunction, error = initialFunction) {
    $.ajax({
        url: `http://10.215.6.255:8003/main/project-list/`,
        type: ajaxType,
        contentType: 'application/json',
        beforeSend: function auth(xhr) {
            xhr.setRequestHeader('Authorization', `Basic ${btoa("wei_cr:123")}`);
        },
        success: function successCallback(data) {
            success(data);
        },
        error: function errorCallback(xhr) {
            error(xhr);
        },
    });
}

