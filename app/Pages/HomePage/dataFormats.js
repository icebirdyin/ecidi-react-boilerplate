/*
 * Data Formats
 *
 * 用于处理各种数据格式问题。
 * 
 */

import { 
	getProjectList 
} from 'Ajax/GET/project-list';


export function getProjectListFormat() {
    getProjectList((data) => {
        console.log(data);
    });
}

