describe("Add Objective Controller", function () {

  var $timeout, objectives, addObjectiveToUser;

  beforeEach(function () {

    module("unacademic.objectives");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      mockUser = {
        addObjective: function(){},
        removeObjective: function(){}
      };

      addObjectiveToUser = spyOn(mockUser, 'addObjective');
      removeObjectiveFromUser = spyOn(mockUser, 'removeObjective');

      objectives = $controller("AddObjective", {
        authentication: {},
        objectives: {
          '000_HTML': {}
        },
        session: {
          user: mockUser
        }
      });
    });
  });

  it("sets the objectives", function(){
    expect(objectives.all).toBeDefined();
  });

  describe('add', function(){
    var objective;
    var key;

    beforeEach(function(){
      key = '000_HTML';
      objectives.add(key);
      objective = objectives.all[key];
    });

    it("changes the added property to true on the objective", function(){
      expect(objective.added).toBeTruthy();
    });

    it("add the objective to the user", function(){
      expect(addObjectiveToUser).toHaveBeenCalledWith(key);
    });
  });

  describe('remove', function(){
    var objective;
    var key;

    beforeEach(function(){
      key = '000_HTML';
      objectives.remove(key);
      objective = objectives.all[key];
    });

    it("changes the added property to false on the objective", function(){
      expect(objective.added).toBeFalsy();
    });

    it("add the objective to the user", function(){
      expect(removeObjectiveFromUser).toHaveBeenCalledWith(key);
    });
  });
});
