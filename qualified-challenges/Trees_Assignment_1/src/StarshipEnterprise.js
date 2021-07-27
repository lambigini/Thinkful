const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // your solution here
  }

  findOfficersWithNoDirectReports(values = []) {
    // your solution here
    return values;
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here
    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
