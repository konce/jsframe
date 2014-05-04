(function(){
    var moduleMap = {};
    var fileMap = {};

    var noop = function() {
    };

    var thin = {
        define: function(name, dependencies, factory){
            if(!moduleMap[name]) {
                var module = {
                    name : name,
                    dependencies: dependencies,
                    factory: factory
                };
            }

            return moduleMap[name];
        },

        use: function(name){},

        require:function(pathArr, callback) {}
    };

    window.thin = thin;

})();
