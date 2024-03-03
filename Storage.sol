// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FamilyDataStorage {
    struct EncryptedData {
        string name1;
        string name2;
        string name3;
        string name4;
    }

    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner");
        _; 
    }

    
    address public owner;

    
    constructor() {
        owner = msg.sender;
    }

    
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    struct DataChange {
        uint256 changeId;
        string name1;
        string name2;
        string name3;
        string name4;
        uint256 timestamp;
    }

    mapping(address => EncryptedData) private encryptedData;
    mapping(address => DataChange[]) private dataChangeHistory;
    uint256 private nextChangeId = 1;

    event DataStored(address indexed owner, string name1, string name2, string name3, string name4, uint256 changeId);

    function storeData(string memory _name1, string memory _name2, string memory _name3, string memory _name4) public {
        encryptedData[msg.sender] = EncryptedData(_name1, _name2, _name3, _name4);
        
        
        dataChangeHistory[msg.sender].push(DataChange(nextChangeId, _name1, _name2, _name3, _name4, block.timestamp));
        emit DataStored(msg.sender, _name1, _name2, _name3, _name4, nextChangeId);
        
        nextChangeId++;
    }

    function getData(address _owner, uint256 changeId) public view returns (string memory, string memory, string memory, string memory, uint256) {
    require(changeId > 0 && changeId < nextChangeId, "ID not match");
    DataChange memory data = dataChangeHistory[_owner][changeId - 1];
    return (data.name1, data.name2, data.name3, data.name4, data.timestamp);
}

    function getLatestData(address _owner) public view returns (string memory, string memory, string memory, string memory, uint256) {
    require(nextChangeId > 1, "No data stored");
    DataChange memory latestData = dataChangeHistory[_owner][nextChangeId - 2];
    return (latestData.name1, latestData.name2, latestData.name3, latestData.name4, latestData.timestamp);
}

    function getDataChangeCount(address _owner) public view returns (uint256) {
    return dataChangeHistory[_owner].length;
}
}
