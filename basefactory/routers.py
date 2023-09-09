


class DatabaseRouter:
    def db_for_read(self, model, **hints):
        # Route all reads to 'sqlite' database
        if model._meta.app_label == 'your_app_name':
            return 'sqlite'
        return 'default'

    def db_for_write(self, model, **hints):
        # Route all writes to 'sqlite' database
        if model._meta.app_label == 'your_app_name':
            return 'sqlite'
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        # Allow relations if both objects are in the 'default' database
        if obj1._state.db == 'default' and obj2._state.db == 'default':
            return True
        # Prevent relations between 'sqlite' and 'default'
        elif obj1._state.db == 'sqlite' or obj2._state.db == 'sqlite':
            return False
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        # Allow migrations only on the 'default' database
        if db == 'default':
            return True
        # Prevent migrations on 'sqlite' database
        elif db == 'sqlite':
            return False
        return None
