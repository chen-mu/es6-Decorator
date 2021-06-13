// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {

    const dealNum = s.trim().split(' ')
    if (dealNum[dealNum.length - 1]) {
        console.log(dealNum[dealNum.length - 1].length);
        return dealNum[dealNum.length - 1].length
    }
    return 0
};

lengthOfLastWord('w ')
