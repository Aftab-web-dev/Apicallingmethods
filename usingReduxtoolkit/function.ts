const handleSubmit = () => {
    const formData = { ...busStops };
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'string' && value.trim() === '') {
        setFieldError(key, true);
        isValid = false;

      } else if (Array.isArray(value) && value.length < 5) {
        setFieldError(key, true);
        isValid = false;
        ToastAndroid.show(
          'Minimum five images are required',
          ToastAndroid.LONG,
        );
      } else {
        setFieldError(key, false);
      }
    });

    if (isValid) {
      const data = {
        primaryData: {
          'DELETE_INSERT_18052bf8-cf18-11ee-944d-02af2863fcaa': {},
        },
        complexData: {
          '807_6966_CM_DELETE_INSERT_06611016-cf1c-11ee-a241-02af2863fcaa': [
            busStops,
          ],
        },
      };
      dispatch(busStopsSubmission(data));
    }
  };